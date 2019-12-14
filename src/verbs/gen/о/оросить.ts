import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оросить: PerfectVerb = {
  name: Word('оросить', 4),
  singular1stPerson: Word('орошу', 4),
  singular2ndPerson: Word('оросишь', 4),
  singular3rdPerson: Word('оросит', 4),
  plural1stPerson: Word('оросим', 4),
  plural2ndPerson: Word('оросите', 4),
  plural3rdPerson: Word('оросят', 4),
  masculinePast: Word('оросил', 4),
  femininePast: Word('оросила', 4),
  neuterPast: Word('оросило', 4),
  pluralPast: Word('оросили', 4),
  imperativeInformal: Word('ороси', 4),
  imperativeFormal: Word('оросите', 4),
  imperfect: ['орошать'],
};

perfectVerbs.set(оросить.name.text, оросить);

export { оросить };