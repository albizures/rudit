import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достраиваться: PerfectVerb = {
  name: Word('достраиваться', 5),
  singular1stPerson: Word('достраиваюсь', 5),
  singular2ndPerson: Word('достраиваешься', 5),
  singular3rdPerson: Word('достраивается', 5),
  plural1stPerson: Word('достраиваемся', 5),
  plural2ndPerson: Word('достраиваетесь', 5),
  plural3rdPerson: Word('достраиваются', 5),
  masculinePast: Word('достраивался', 5),
  femininePast: Word('достраивалась', 5),
  neuterPast: Word('достраивалось', 5),
  pluralPast: Word('достраивались', 5),
  imperativeInformal: Word('достраивайся', 5),
  imperativeFormal: Word('достраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(достраиваться.name.text, достраиваться);

export { достраиваться };