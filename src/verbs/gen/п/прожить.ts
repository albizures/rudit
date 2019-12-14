import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожить: PerfectVerb = {
  name: Word('прожить', 4),
  singular1stPerson: Word('проживу', 6),
  singular2ndPerson: Word('проживёшь', 4),
  singular3rdPerson: Word('проживёт', 4),
  plural1stPerson: Word('проживём', 4),
  plural2ndPerson: Word('проживёте', 8),
  plural3rdPerson: Word('проживут', 6),
  masculinePast: Word('прожил,прожи'л', 4),
  femininePast: Word('прожила', 6),
  neuterPast: Word('прожило,прожи'ло', 4),
  pluralPast: Word('прожили,прожи'ли', 4),
  imperativeInformal: Word('проживи', 6),
  imperativeFormal: Word('проживите', 6),
  imperfect: ['проживать','жить'],
};

perfectVerbs.set(прожить.name.text, прожить);

export { прожить };