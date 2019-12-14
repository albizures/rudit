import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вращаться: PerfectVerb = {
  name: Word('вращаться', 4),
  singular1stPerson: Word('вращаюсь', 4),
  singular2ndPerson: Word('вращаешься', 4),
  singular3rdPerson: Word('вращается', 4),
  plural1stPerson: Word('вращаемся', 4),
  plural2ndPerson: Word('вращаетесь', 4),
  plural3rdPerson: Word('вращаются', 4),
  masculinePast: Word('вращался', 4),
  femininePast: Word('вращалась', 4),
  neuterPast: Word('вращалось', 4),
  pluralPast: Word('вращались', 4),
  imperativeInformal: Word('вращайся', 4),
  imperativeFormal: Word('вращайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вращаться.name.text, вращаться);

export { вращаться };