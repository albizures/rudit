import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кусаться: PerfectVerb = {
  name: Word('кусаться', 3),
  singular1stPerson: Word('кусаюсь', 3),
  singular2ndPerson: Word('кусаешься', 3),
  singular3rdPerson: Word('кусается', 3),
  plural1stPerson: Word('кусаемся', 3),
  plural2ndPerson: Word('кусаетесь', 3),
  plural3rdPerson: Word('кусаются', 3),
  masculinePast: Word('кусался', 3),
  femininePast: Word('кусалась', 3),
  neuterPast: Word('кусалось', 3),
  pluralPast: Word('кусались', 3),
  imperativeInformal: Word('кусайся', 3),
  imperativeFormal: Word('кусайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(кусаться.name.text, кусаться);

export { кусаться };