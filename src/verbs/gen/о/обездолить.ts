import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обездолить: PerfectVerb = {
  name: Word('обездолить', 5),
  singular1stPerson: Word('обездолю', 5),
  singular2ndPerson: Word('обездолишь', 5),
  singular3rdPerson: Word('обездолит', 5),
  plural1stPerson: Word('обездолим', 5),
  plural2ndPerson: Word('обездолите', 5),
  plural3rdPerson: Word('обездолят', 5),
  masculinePast: Word('обездолил', 5),
  femininePast: Word('обездолила', 5),
  neuterPast: Word('обездолило', 5),
  pluralPast: Word('обездолили', 5),
  imperativeInformal: Word('обездоль', 5),
  imperativeFormal: Word('обездольте', 5),
  imperfect: [],
};

perfectVerbs.set(обездолить.name.text, обездолить);

export { обездолить };