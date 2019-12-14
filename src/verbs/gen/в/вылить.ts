import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылить: PerfectVerb = {
  name: Word('вылить', 1),
  singular1stPerson: Word('вылью', 1),
  singular2ndPerson: Word('выльешь', 1),
  singular3rdPerson: Word('выльет', 1),
  plural1stPerson: Word('выльем', 1),
  plural2ndPerson: Word('выльете', 1),
  plural3rdPerson: Word('выльют', 1),
  masculinePast: Word('вылил', 1),
  femininePast: Word('вылила', 1),
  neuterPast: Word('вылило', 1),
  pluralPast: Word('вылили', 1),
  imperativeInformal: Word('вылей', 1),
  imperativeFormal: Word('вылейте', 1),
  imperfect: ['выливать','лить'],
};

perfectVerbs.set(вылить.name.text, вылить);

export { вылить };