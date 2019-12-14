import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разочароваться: PerfectVerb = {
  name: Word('разочароваться', 9),
  singular1stPerson: Word('разочаруюсь', 7),
  singular2ndPerson: Word('разочаруешься', 7),
  singular3rdPerson: Word('разочаруется', 7),
  plural1stPerson: Word('разочаруемся', 7),
  plural2ndPerson: Word('разочаруетесь', 7),
  plural3rdPerson: Word('разочаруются', 7),
  masculinePast: Word('разочаровался', 9),
  femininePast: Word('разочаровалась', 9),
  neuterPast: Word('разочаровалось', 9),
  pluralPast: Word('разочаровались', 9),
  imperativeInformal: Word('разочаруйся', 7),
  imperativeFormal: Word('разочаруйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разочароваться.name.text, разочароваться);

export { разочароваться };