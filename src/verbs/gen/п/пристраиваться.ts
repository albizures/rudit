import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристраиваться: PerfectVerb = {
  name: Word('пристраиваться', 6),
  singular1stPerson: Word('пристраиваюсь', 6),
  singular2ndPerson: Word('пристраиваешься', 6),
  singular3rdPerson: Word('пристраивается', 6),
  plural1stPerson: Word('пристраиваемся', 6),
  plural2ndPerson: Word('пристраиваетесь', 6),
  plural3rdPerson: Word('пристраиваются', 6),
  masculinePast: Word('пристраивался', 6),
  femininePast: Word('пристраивалась', 6),
  neuterPast: Word('пристраивалось', 6),
  pluralPast: Word('пристраивались', 6),
  imperativeInformal: Word('пристраивайся', 6),
  imperativeFormal: Word('пристраивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пристраиваться.name.text, пристраиваться);

export { пристраиваться };