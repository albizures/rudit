import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освободить: PerfectVerb = {
  name: Word('освободить', 7),
  singular1stPerson: Word('освобожу', 7),
  singular2ndPerson: Word('освободишь', 7),
  singular3rdPerson: Word('освободит', 7),
  plural1stPerson: Word('освободим', 7),
  plural2ndPerson: Word('освободите', 7),
  plural3rdPerson: Word('освободят', 7),
  masculinePast: Word('освободил', 7),
  femininePast: Word('освободила', 7),
  neuterPast: Word('освободило', 7),
  pluralPast: Word('освободили', 7),
  imperativeInformal: Word('освободи', 7),
  imperativeFormal: Word('освободите', 7),
  imperfect: ['освобождать'],
};

perfectVerbs.set(освободить.name.text, освободить);

export { освободить };