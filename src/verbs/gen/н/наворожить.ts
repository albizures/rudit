import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворожить: PerfectVerb = {
  name: Word('наворожить', 7),
  singular1stPerson: Word('наворожу', 7),
  singular2ndPerson: Word('наворожишь', 7),
  singular3rdPerson: Word('наворожит', 7),
  plural1stPerson: Word('наворожим', 7),
  plural2ndPerson: Word('наворожите', 7),
  plural3rdPerson: Word('наворожат', 7),
  masculinePast: Word('наворожил', 7),
  femininePast: Word('наворожила', 7),
  neuterPast: Word('наворожило', 7),
  pluralPast: Word('наворожили', 7),
  imperativeInformal: Word('наворожи', 7),
  imperativeFormal: Word('наворожите', 7),
  imperfect: [],
};

perfectVerbs.set(наворожить.name.text, наворожить);

export { наворожить };