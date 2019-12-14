import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выщелочить: PerfectVerb = {
  name: Word('выщелочить', 1),
  singular1stPerson: Word('выщелочу', 1),
  singular2ndPerson: Word('выщелочишь', 1),
  singular3rdPerson: Word('выщелочит', 1),
  plural1stPerson: Word('выщелочим', 1),
  plural2ndPerson: Word('выщелочите', 1),
  plural3rdPerson: Word('выщелочат', 1),
  masculinePast: Word('выщелочил', 1),
  femininePast: Word('выщелочила', 1),
  neuterPast: Word('выщелочило', 1),
  pluralPast: Word('выщелочили', 1),
  imperativeInformal: Word('выщелочи', 1),
  imperativeFormal: Word('выщелочите', 1),
  imperfect: [],
};

perfectVerbs.set(выщелочить.name.text, выщелочить);

export { выщелочить };