import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожить: PerfectVerb = {
  name: Word('ожить', 2),
  singular1stPerson: Word('оживу', 4),
  singular2ndPerson: Word('оживёшь', 4),
  singular3rdPerson: Word('оживёт', 4),
  plural1stPerson: Word('оживём', 4),
  plural2ndPerson: Word('оживёте', 4),
  plural3rdPerson: Word('оживут', 4),
  masculinePast: Word('ожил', 2),
  femininePast: Word('ожила', 4),
  neuterPast: Word('ожило', 2),
  pluralPast: Word('ожили', 2),
  imperativeInformal: Word('оживи', 4),
  imperativeFormal: Word('оживите', 4),
  imperfect: ['оживать'],
};

perfectVerbs.set(ожить.name.text, ожить);

export { ожить };