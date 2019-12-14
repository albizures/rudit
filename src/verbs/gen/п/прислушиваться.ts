import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислушиваться: PerfectVerb = {
  name: Word('прислушиваться', 5),
  singular1stPerson: Word('прислушиваюсь', 5),
  singular2ndPerson: Word('прислушиваешься', 5),
  singular3rdPerson: Word('прислушивается', 5),
  plural1stPerson: Word('прислушиваемся', 5),
  plural2ndPerson: Word('прислушиваетесь', 5),
  plural3rdPerson: Word('прислушиваются', 5),
  masculinePast: Word('прислушивался', 5),
  femininePast: Word('прислушивалась', 5),
  neuterPast: Word('прислушивалось', 5),
  pluralPast: Word('прислушивались', 5),
  imperativeInformal: Word('прислушивайся', 5),
  imperativeFormal: Word('прислушивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прислушиваться.name.text, прислушиваться);

export { прислушиваться };