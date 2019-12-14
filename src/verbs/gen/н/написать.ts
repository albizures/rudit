import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const написать: PerfectVerb = {
  name: Word('написать', 5),
  singular1stPerson: Word('напишу', 5),
  singular2ndPerson: Word('напишешь', 3),
  singular3rdPerson: Word('напишет', 3),
  plural1stPerson: Word('напишем', 3),
  plural2ndPerson: Word('напишете', 3),
  plural3rdPerson: Word('напишут', 3),
  masculinePast: Word('написал', 5),
  femininePast: Word('написала', 5),
  neuterPast: Word('написало', 5),
  pluralPast: Word('написали', 5),
  imperativeInformal: Word('напиши', 5),
  imperativeFormal: Word('напишите', 5),
  imperfect: ['писать'],
};

perfectVerbs.set(написать.name.text, написать);

export { написать };