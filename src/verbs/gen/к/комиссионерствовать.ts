import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комиссионерствовать: PerfectVerb = {
  name: Word('комиссионерствовать', 9),
  singular1stPerson: Word('комиссионерствую', 9),
  singular2ndPerson: Word('комиссионерствуешь', 9),
  singular3rdPerson: Word('комиссионерствует', 9),
  plural1stPerson: Word('комиссионерствуем', 9),
  plural2ndPerson: Word('комиссионерствуете', 9),
  plural3rdPerson: Word('комиссионерствуют', 9),
  masculinePast: Word('комиссионерствовал', 9),
  femininePast: Word('комиссионерствовала', 9),
  neuterPast: Word('комиссионерствовало', 9),
  pluralPast: Word('комиссионерствовали', 9),
  imperativeInformal: Word('комиссионерствуй', 9),
  imperativeFormal: Word('комиссионерствуйте', 9),
  imperfect: [],
};

perfectVerbs.set(комиссионерствовать.name.text, комиссионерствовать);

export { комиссионерствовать };