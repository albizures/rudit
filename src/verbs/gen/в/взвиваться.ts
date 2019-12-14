import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвиваться: PerfectVerb = {
  name: Word('взвиваться', 5),
  singular1stPerson: Word('взвиваюсь', 5),
  singular2ndPerson: Word('взвиваешься', 5),
  singular3rdPerson: Word('взвивается', 5),
  plural1stPerson: Word('взвиваемся', 5),
  plural2ndPerson: Word('взвиваетесь', 5),
  plural3rdPerson: Word('взвиваются', 5),
  masculinePast: Word('взвивался', 5),
  femininePast: Word('взвивалась', 5),
  neuterPast: Word('взвивалось', 5),
  pluralPast: Word('взвивались', 5),
  imperativeInformal: Word('взвивайся', 5),
  imperativeFormal: Word('взвивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(взвиваться.name.text, взвиваться);

export { взвиваться };