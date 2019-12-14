import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предвосхищать: PerfectVerb = {
  name: Word('предвосхищать', 10),
  singular1stPerson: Word('предвосхищаю', 10),
  singular2ndPerson: Word('предвосхищаешь', 10),
  singular3rdPerson: Word('предвосхищает', 10),
  plural1stPerson: Word('предвосхищаем', 10),
  plural2ndPerson: Word('предвосхищаете', 10),
  plural3rdPerson: Word('предвосхищают', 10),
  masculinePast: Word('предвосхищал', 10),
  femininePast: Word('предвосхищала', 10),
  neuterPast: Word('предвосхищало', 10),
  pluralPast: Word('предвосхищали', 10),
  imperativeInformal: Word('предвосхищай', 10),
  imperativeFormal: Word('предвосхищайте', 10),
  imperfect: ['предвосхитить'],
};

perfectVerbs.set(предвосхищать.name.text, предвосхищать);

export { предвосхищать };