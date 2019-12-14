import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устраиваться: PerfectVerb = {
  name: Word('устраиваться', 4),
  singular1stPerson: Word('устраиваюсь', 4),
  singular2ndPerson: Word('устраиваешься', 4),
  singular3rdPerson: Word('устраивается', 4),
  plural1stPerson: Word('устраиваемся', 4),
  plural2ndPerson: Word('устраиваетесь', 4),
  plural3rdPerson: Word('устраиваются', 4),
  masculinePast: Word('устраивался', 4),
  femininePast: Word('устраивалась', 4),
  neuterPast: Word('устраивалось', 4),
  pluralPast: Word('устраивались', 4),
  imperativeInformal: Word('устраивайся', 4),
  imperativeFormal: Word('устраивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(устраиваться.name.text, устраиваться);

export { устраиваться };