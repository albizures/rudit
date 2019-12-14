import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спросить: PerfectVerb = {
  name: Word('спросить', 5),
  singular1stPerson: Word('спрошу', 5),
  singular2ndPerson: Word('спросишь', 3),
  singular3rdPerson: Word('спросит', 3),
  plural1stPerson: Word('спросим', 3),
  plural2ndPerson: Word('спросите', 3),
  plural3rdPerson: Word('спросят', 3),
  masculinePast: Word('спросил', 5),
  femininePast: Word('спросила', 5),
  neuterPast: Word('спросило', 5),
  pluralPast: Word('спросили', 5),
  imperativeInformal: Word('спроси', 5),
  imperativeFormal: Word('спросите', 5),
  imperfect: ['спрашивать'],
};

perfectVerbs.set(спросить.name.text, спросить);

export { спросить };