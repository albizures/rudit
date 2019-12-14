import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предпринимать: PerfectVerb = {
  name: Word('предпринимать', 10),
  singular1stPerson: Word('предпринимаю', 10),
  singular2ndPerson: Word('предпринимаешь', 10),
  singular3rdPerson: Word('предпринимает', 10),
  plural1stPerson: Word('предпринимаем', 10),
  plural2ndPerson: Word('предпринимаете', 10),
  plural3rdPerson: Word('предпринимают', 10),
  masculinePast: Word('предпринимал', 10),
  femininePast: Word('предпринимала', 10),
  neuterPast: Word('предпринимало', 10),
  pluralPast: Word('предпринимали', 10),
  imperativeInformal: Word('предпринимай', 10),
  imperativeFormal: Word('предпринимайте', 10),
  imperfect: ['предпринять'],
};

perfectVerbs.set(предпринимать.name.text, предпринимать);

export { предпринимать };