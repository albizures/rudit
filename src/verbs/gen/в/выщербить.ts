import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выщербить: PerfectVerb = {
  name: Word('выщербить', 1),
  singular1stPerson: Word('выщерблю', 1),
  singular2ndPerson: Word('выщербишь', 1),
  singular3rdPerson: Word('выщербит', 1),
  plural1stPerson: Word('выщербим', 1),
  plural2ndPerson: Word('выщербите', 1),
  plural3rdPerson: Word('выщербят', 1),
  masculinePast: Word('выщербил', 1),
  femininePast: Word('выщербила', 1),
  neuterPast: Word('выщербило', 1),
  pluralPast: Word('выщербили', 1),
  imperativeInformal: Word('выщерби', 1),
  imperativeFormal: Word('выщербите', 1),
  imperfect: [],
};

perfectVerbs.set(выщербить.name.text, выщербить);

export { выщербить };