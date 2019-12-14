import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблаговолить: PerfectVerb = {
  name: Word('соблаговолить', 10),
  singular1stPerson: Word('соблаговолю', 10),
  singular2ndPerson: Word('соблаговолишь', 10),
  singular3rdPerson: Word('соблаговолит', 10),
  plural1stPerson: Word('соблаговолим', 10),
  plural2ndPerson: Word('соблаговолите', 10),
  plural3rdPerson: Word('соблаговолят', 10),
  masculinePast: Word('соблаговолил', 10),
  femininePast: Word('соблаговолила', 10),
  neuterPast: Word('соблаговолило', 10),
  pluralPast: Word('соблаговолили', 10),
  imperativeInformal: Word('соблаговоли', 10),
  imperativeFormal: Word('соблаговолите', 10),
  imperfect: [],
};

perfectVerbs.set(соблаговолить.name.text, соблаговолить);

export { соблаговолить };