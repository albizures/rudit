import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const общаться: PerfectVerb = {
  name: Word('общаться', 3),
  singular1stPerson: Word('общаюсь', 3),
  singular2ndPerson: Word('общаешься', 3),
  singular3rdPerson: Word('общается', 3),
  plural1stPerson: Word('общаемся', 3),
  plural2ndPerson: Word('общаетесь', 3),
  plural3rdPerson: Word('общаются', 3),
  masculinePast: Word('общался', 3),
  femininePast: Word('общалась', 3),
  neuterPast: Word('общалось', 3),
  pluralPast: Word('общались', 3),
  imperativeInformal: Word('общайся', 3),
  imperativeFormal: Word('общайтесь', 3),
  imperfect: ['пообщаться','общнуться'],
};

perfectVerbs.set(общаться.name.text, общаться);

export { общаться };