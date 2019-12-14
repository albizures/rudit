import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предпосылать: PerfectVerb = {
  name: Word('предпосылать', 9),
  singular1stPerson: Word('предпосылаю', 9),
  singular2ndPerson: Word('предпосылаешь', 9),
  singular3rdPerson: Word('предпосылает', 9),
  plural1stPerson: Word('предпосылаем', 9),
  plural2ndPerson: Word('предпосылаете', 9),
  plural3rdPerson: Word('предпосылают', 9),
  masculinePast: Word('предпосылал', 9),
  femininePast: Word('предпосылала', 9),
  neuterPast: Word('предпосылало', 9),
  pluralPast: Word('предпосылали', 9),
  imperativeInformal: Word('предпосылай', 9),
  imperativeFormal: Word('предпосылайте', 9),
  imperfect: [],
};

perfectVerbs.set(предпосылать.name.text, предпосылать);

export { предпосылать };