import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограничиваться: PerfectVerb = {
  name: Word('ограничиваться', 5),
  singular1stPerson: Word('ограничиваюсь', 5),
  singular2ndPerson: Word('ограничиваешься', 5),
  singular3rdPerson: Word('ограничивается', 5),
  plural1stPerson: Word('ограничиваемся', 5),
  plural2ndPerson: Word('ограничиваетесь', 5),
  plural3rdPerson: Word('ограничиваются', 5),
  masculinePast: Word('ограничивался', 5),
  femininePast: Word('ограничивалась', 5),
  neuterPast: Word('ограничивалось', 5),
  pluralPast: Word('ограничивались', 5),
  imperativeInformal: Word('ограничивайся', 5),
  imperativeFormal: Word('ограничивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ограничиваться.name.text, ограничиваться);

export { ограничиваться };