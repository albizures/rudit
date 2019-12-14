import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сторговаться: PerfectVerb = {
  name: Word('сторговаться', 7),
  singular1stPerson: Word('сторгуюсь', 5),
  singular2ndPerson: Word('сторгуешься', 5),
  singular3rdPerson: Word('сторгуется', 5),
  plural1stPerson: Word('сторгуемся', 5),
  plural2ndPerson: Word('сторгуетесь', 5),
  plural3rdPerson: Word('сторгуются', 5),
  masculinePast: Word('сторговался', 7),
  femininePast: Word('сторговалась', 7),
  neuterPast: Word('сторговалось', 7),
  pluralPast: Word('сторговались', 7),
  imperativeInformal: Word('сторгуйся', 5),
  imperativeFormal: Word('сторгуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сторговаться.name.text, сторговаться);

export { сторговаться };