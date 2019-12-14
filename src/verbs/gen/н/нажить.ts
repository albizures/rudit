import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажить: PerfectVerb = {
  name: Word('нажить', 3),
  singular1stPerson: Word('наживу', 5),
  singular2ndPerson: Word('наживёшь', 1),
  singular3rdPerson: Word('наживёт', 1),
  plural1stPerson: Word('наживём', 1),
  plural2ndPerson: Word('наживёте', 1),
  plural3rdPerson: Word('наживут', 5),
  masculinePast: Word('нажил//на'жил', 3),
  femininePast: Word('нажила', 5),
  neuterPast: Word('нажило//на'жило', 3),
  pluralPast: Word('нажили//на'жили', 3),
  imperativeInformal: Word('наживи', 5),
  imperativeFormal: Word('наживите', 5),
  imperfect: [],
};

perfectVerbs.set(нажить.name.text, нажить);

export { нажить };