import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дожить: PerfectVerb = {
  name: Word('дожить', 3),
  singular1stPerson: Word('доживу', 5),
  singular2ndPerson: Word('доживёшь', 3),
  singular3rdPerson: Word('доживёт', 3),
  plural1stPerson: Word('доживём', 3),
  plural2ndPerson: Word('доживёте', 7),
  plural3rdPerson: Word('доживут', 5),
  masculinePast: Word('дожил//до'жил', 3),
  femininePast: Word('дожила', 5),
  neuterPast: Word('дожило//до'жило', 3),
  pluralPast: Word('дожили//до'жили', 3),
  imperativeInformal: Word('доживи', 5),
  imperativeFormal: Word('доживите', 5),
  imperfect: [],
};

perfectVerbs.set(дожить.name.text, дожить);

export { дожить };