import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплачиваться: PerfectVerb = {
  name: Word('расплачиваться', 5),
  singular1stPerson: Word('расплачиваюсь', 5),
  singular2ndPerson: Word('расплачиваешься', 5),
  singular3rdPerson: Word('расплачивается', 5),
  plural1stPerson: Word('расплачиваемся', 5),
  plural2ndPerson: Word('расплачиваетесь', 5),
  plural3rdPerson: Word('расплачиваются', 5),
  masculinePast: Word('расплачивался', 5),
  femininePast: Word('расплачивалась', 5),
  neuterPast: Word('расплачивалось', 5),
  pluralPast: Word('расплачивались', 5),
  imperativeInformal: Word('расплачивайся', 5),
  imperativeFormal: Word('расплачивайтесь', 5),
  imperfect: ['расплатиться'],
};

perfectVerbs.set(расплачиваться.name.text, расплачиваться);

export { расплачиваться };