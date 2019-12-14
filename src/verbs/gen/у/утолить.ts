import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утолить: PerfectVerb = {
  name: Word('утолить', 4),
  singular1stPerson: Word('утолю', 4),
  singular2ndPerson: Word('утолишь', 4),
  singular3rdPerson: Word('утолит', 4),
  plural1stPerson: Word('утолим', 4),
  plural2ndPerson: Word('утолите', 4),
  plural3rdPerson: Word('утолят', 4),
  masculinePast: Word('утолил', 4),
  femininePast: Word('утолила', 4),
  neuterPast: Word('утолило', 4),
  pluralPast: Word('утолили', 4),
  imperativeInformal: Word('утоли', 4),
  imperativeFormal: Word('утолите', 4),
  imperfect: ['утолять'],
};

perfectVerbs.set(утолить.name.text, утолить);

export { утолить };