import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заворожить: PerfectVerb = {
  name: Word('заворожить', 7),
  singular1stPerson: Word('заворожу', 7),
  singular2ndPerson: Word('заворожишь', 7),
  singular3rdPerson: Word('заворожит', 7),
  plural1stPerson: Word('заворожим', 7),
  plural2ndPerson: Word('заворожите', 7),
  plural3rdPerson: Word('заворожат', 7),
  masculinePast: Word('заворожил', 7),
  femininePast: Word('заворожила', 7),
  neuterPast: Word('заворожило', 7),
  pluralPast: Word('заворожили', 7),
  imperativeInformal: Word('заворожи', 7),
  imperativeFormal: Word('заворожите', 7),
  imperfect: [],
};

perfectVerbs.set(заворожить.name.text, заворожить);

export { заворожить };