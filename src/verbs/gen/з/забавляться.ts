import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забавляться: PerfectVerb = {
  name: Word('забавляться', 6),
  singular1stPerson: Word('забавляюсь', 6),
  singular2ndPerson: Word('забавляешься', 6),
  singular3rdPerson: Word('забавляется', 6),
  plural1stPerson: Word('забавляемся', 6),
  plural2ndPerson: Word('забавляетесь', 6),
  plural3rdPerson: Word('забавляются', 6),
  masculinePast: Word('забавлялся', 6),
  femininePast: Word('забавлялась', 6),
  neuterPast: Word('забавлялось', 6),
  pluralPast: Word('забавлялись', 6),
  imperativeInformal: Word('забавляйся', 6),
  imperativeFormal: Word('забавляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(забавляться.name.text, забавляться);

export { забавляться };