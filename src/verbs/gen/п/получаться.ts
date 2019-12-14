import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const получаться: PerfectVerb = {
  name: Word('получаться', 5),
  singular1stPerson: Word('получаюсь', 5),
  singular2ndPerson: Word('получаешься', 5),
  singular3rdPerson: Word('получается', 5),
  plural1stPerson: Word('получаемся', 5),
  plural2ndPerson: Word('получаетесь', 5),
  plural3rdPerson: Word('получаются', 5),
  masculinePast: Word('получался', 5),
  femininePast: Word('получалась', 5),
  neuterPast: Word('получалось', 5),
  pluralPast: Word('получались', 5),
  imperativeInformal: Word('получайся', 5),
  imperativeFormal: Word('получайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(получаться.name.text, получаться);

export { получаться };