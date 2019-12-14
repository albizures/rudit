import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извиваться: PerfectVerb = {
  name: Word('извиваться', 5),
  singular1stPerson: Word('извиваюсь', 5),
  singular2ndPerson: Word('извиваешься', 5),
  singular3rdPerson: Word('извивается', 5),
  plural1stPerson: Word('извиваемся', 5),
  plural2ndPerson: Word('извиваетесь', 5),
  plural3rdPerson: Word('извиваются', 5),
  masculinePast: Word('извивался', 5),
  femininePast: Word('извивалась', 5),
  neuterPast: Word('извивалось', 5),
  pluralPast: Word('извивались', 5),
  imperativeInformal: Word('извивайся', 5),
  imperativeFormal: Word('извивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(извиваться.name.text, извиваться);

export { извиваться };