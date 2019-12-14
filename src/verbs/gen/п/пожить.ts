import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожить: PerfectVerb = {
  name: Word('пожить', 3),
  singular1stPerson: Word('поживу', 5),
  singular2ndPerson: Word('поживёшь', 5),
  singular3rdPerson: Word('поживёт', 5),
  plural1stPerson: Word('поживём', 5),
  plural2ndPerson: Word('поживёте', 5),
  plural3rdPerson: Word('поживут', 5),
  masculinePast: Word('пожил', 3),
  femininePast: Word('пожила', 5),
  neuterPast: Word('пожило,пожило'', 3),
  pluralPast: Word('пожили', 3),
  imperativeInformal: Word('поживи', 5),
  imperativeFormal: Word('поживите', 5),
  imperfect: ['жить'],
};

perfectVerbs.set(пожить.name.text, пожить);

export { пожить };