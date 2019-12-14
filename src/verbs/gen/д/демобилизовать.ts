import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демобилизовать: PerfectVerb = {
  name: Word('демобилизовать', 11),
  singular1stPerson: Word('демобилизую', 9),
  singular2ndPerson: Word('демобилизуешь', 9),
  singular3rdPerson: Word('демобилизует', 9),
  plural1stPerson: Word('демобилизуем', 9),
  plural2ndPerson: Word('демобилизуете', 9),
  plural3rdPerson: Word('демобилизуют', 9),
  masculinePast: Word('демобилизовал', 11),
  femininePast: Word('демобилизовала', 11),
  neuterPast: Word('демобилизовало', 11),
  pluralPast: Word('демобилизовали', 11),
  imperativeInformal: Word('демобилизуй', 9),
  imperativeFormal: Word('демобилизуйте', 9),
  imperfect: [],
};

perfectVerbs.set(демобилизовать.name.text, демобилизовать);

export { демобилизовать };