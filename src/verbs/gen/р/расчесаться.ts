import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчесаться: PerfectVerb = {
  name: Word('расчесаться', 6),
  singular1stPerson: Word('расчешусь', 6),
  singular2ndPerson: Word('расчешешься', 4),
  singular3rdPerson: Word('расчешется', 4),
  plural1stPerson: Word('расчешемся', 4),
  plural2ndPerson: Word('расчешетесь', 4),
  plural3rdPerson: Word('расчешутся', 4),
  masculinePast: Word('расчесался', 6),
  femininePast: Word('расчесалась', 6),
  neuterPast: Word('расчесалось', 6),
  pluralPast: Word('расчесались', 6),
  imperativeInformal: Word('расчешись', 6),
  imperativeFormal: Word('расчешитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расчесаться.name.text, расчесаться);

export { расчесаться };