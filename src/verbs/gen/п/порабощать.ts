import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порабощать: PerfectVerb = {
  name: Word('порабощать', 7),
  singular1stPerson: Word('порабощаю', 7),
  singular2ndPerson: Word('порабощаешь', 7),
  singular3rdPerson: Word('порабощает', 7),
  plural1stPerson: Word('порабощаем', 7),
  plural2ndPerson: Word('порабощаете', 7),
  plural3rdPerson: Word('порабощают', 7),
  masculinePast: Word('порабощал', 7),
  femininePast: Word('порабощала', 7),
  neuterPast: Word('порабощало', 7),
  pluralPast: Word('порабощали', 7),
  imperativeInformal: Word('порабощай', 7),
  imperativeFormal: Word('порабощайте', 7),
  imperfect: [],
};

perfectVerbs.set(порабощать.name.text, порабощать);

export { порабощать };