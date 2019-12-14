import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стлаться: PerfectVerb = {
  name: Word('стлаться', 3),
  singular1stPerson: Word('стелюсь', 4),
  singular2ndPerson: Word('стелешься', 2),
  singular3rdPerson: Word('стелется', 2),
  plural1stPerson: Word('стелемся', 2),
  plural2ndPerson: Word('стелетесь', 2),
  plural3rdPerson: Word('стелются', 2),
  masculinePast: Word('стлался', 3),
  femininePast: Word('стлалась', 3),
  neuterPast: Word('стлалось', 3),
  pluralPast: Word('стлались', 3),
  imperativeInformal: Word('стелись', 4),
  imperativeFormal: Word('стелитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стлаться.name.text, стлаться);

export { стлаться };