import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const браться: PerfectVerb = {
  name: Word('браться', 2),
  singular1stPerson: Word('берусь', 3),
  singular2ndPerson: Word('берёшься', 3),
  singular3rdPerson: Word('берётся', 3),
  plural1stPerson: Word('берёмся', 3),
  plural2ndPerson: Word('берётесь', 3),
  plural3rdPerson: Word('берутся', 3),
  masculinePast: Word('брался', 2),
  femininePast: Word('бралась', 4),
  neuterPast: Word('бралось,брало'сь', 2),
  pluralPast: Word('брались,брали'сь', 2),
  imperativeInformal: Word('берись', 3),
  imperativeFormal: Word('беритесь', 3),
  imperfect: ['взяться'],
};

perfectVerbs.set(браться.name.text, браться);

export { браться };