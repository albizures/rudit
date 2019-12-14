import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пудлинговать: PerfectVerb = {
  name: Word('пудлинговать', 9),
  singular1stPerson: Word('пудлингую', 7),
  singular2ndPerson: Word('пудлингуешь', 7),
  singular3rdPerson: Word('пудлингует', 7),
  plural1stPerson: Word('пудлингуем', 7),
  plural2ndPerson: Word('пудлингуете', 7),
  plural3rdPerson: Word('пудлингуют', 7),
  masculinePast: Word('пудлинговал', 9),
  femininePast: Word('пудлинговала', 9),
  neuterPast: Word('пудлинговало', 9),
  pluralPast: Word('пудлинговали', 9),
  imperativeInformal: Word('пудлингуй', 7),
  imperativeFormal: Word('пудлингуйте', 7),
  imperfect: [],
};

perfectVerbs.set(пудлинговать.name.text, пудлинговать);

export { пудлинговать };