import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побелить: PerfectVerb = {
  name: Word('побелить', 5),
  singular1stPerson: Word('побелю', 5),
  singular2ndPerson: Word('побелишь', 3),
  singular3rdPerson: Word('побелит', 3),
  plural1stPerson: Word('побелим', 3),
  plural2ndPerson: Word('побелите', 3),
  plural3rdPerson: Word('побелят', 3),
  masculinePast: Word('побелил', 5),
  femininePast: Word('побелила', 5),
  neuterPast: Word('побелило', 5),
  pluralPast: Word('побелили', 5),
  imperativeInformal: Word('побели', 5),
  imperativeFormal: Word('побелите', 5),
  imperfect: [],
};

perfectVerbs.set(побелить.name.text, побелить);

export { побелить };