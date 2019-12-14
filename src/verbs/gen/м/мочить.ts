import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мочить: PerfectVerb = {
  name: Word('мочить', 3),
  singular1stPerson: Word('мочу', 3),
  singular2ndPerson: Word('мочишь', 1),
  singular3rdPerson: Word('мочит', 1),
  plural1stPerson: Word('мочим', 1),
  plural2ndPerson: Word('мочите', 1),
  plural3rdPerson: Word('мочат', 1),
  masculinePast: Word('мочил', 3),
  femininePast: Word('мочила', 3),
  neuterPast: Word('мочило', 3),
  pluralPast: Word('мочили', 3),
  imperativeInformal: Word('мочи', 3),
  imperativeFormal: Word('мочите', 3),
  imperfect: [],
};

perfectVerbs.set(мочить.name.text, мочить);

export { мочить };