import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беспокоить: PerfectVerb = {
  name: Word('беспокоить', 6),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('', -1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('', -1),
  masculinePast: Word('беспокоил', 6),
  femininePast: Word('беспокоила', 6),
  neuterPast: Word('беспокоило', 6),
  pluralPast: Word('беспокоили', 6),
  imperativeInformal: Word('безпокой', 6),
  imperativeFormal: Word('безпокойте', 6),
  imperfect: ['побеспокоить','обеспокоить'],
};

perfectVerbs.set(беспокоить.name.text, беспокоить);

export { беспокоить };