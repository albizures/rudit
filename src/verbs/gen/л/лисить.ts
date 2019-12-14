import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лисить: PerfectVerb = {
  name: Word('лисить', 3),
  singular1stPerson: Word('лишу', 3),
  singular2ndPerson: Word('лисишь', 3),
  singular3rdPerson: Word('лисит', 3),
  plural1stPerson: Word('лисим', 3),
  plural2ndPerson: Word('лисите', 3),
  plural3rdPerson: Word('лисят', 3),
  masculinePast: Word('лисил', 3),
  femininePast: Word('лисила', 3),
  neuterPast: Word('лисило', 3),
  pluralPast: Word('лисили', 3),
  imperativeInformal: Word('лиси', 3),
  imperativeFormal: Word('лисите', 3),
  imperfect: [],
};

perfectVerbs.set(лисить.name.text, лисить);

export { лисить };