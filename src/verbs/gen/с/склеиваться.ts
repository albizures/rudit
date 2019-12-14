import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склеиваться: PerfectVerb = {
  name: Word('склеиваться', 3),
  singular1stPerson: Word('склеиваюсь', 3),
  singular2ndPerson: Word('склеиваешься', 3),
  singular3rdPerson: Word('склеивается', 3),
  plural1stPerson: Word('склеиваемся', 3),
  plural2ndPerson: Word('склеиваетесь', 3),
  plural3rdPerson: Word('склеиваются', 3),
  masculinePast: Word('склеивался', 3),
  femininePast: Word('склеивалась', 3),
  neuterPast: Word('склеивалось', 3),
  pluralPast: Word('склеивались', 3),
  imperativeInformal: Word('склеивайся', 3),
  imperativeFormal: Word('склеивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(склеиваться.name.text, склеиваться);

export { склеиваться };