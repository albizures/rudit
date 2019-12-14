import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемешиваться: PerfectVerb = {
  name: Word('перемешиваться', 5),
  singular1stPerson: Word('перемешиваюсь', 5),
  singular2ndPerson: Word('перемешиваешься', 5),
  singular3rdPerson: Word('перемешивается', 5),
  plural1stPerson: Word('перемешиваемся', 5),
  plural2ndPerson: Word('перемешиваетесь', 5),
  plural3rdPerson: Word('перемешиваются', 5),
  masculinePast: Word('перемешивался', 5),
  femininePast: Word('перемешивалась', 5),
  neuterPast: Word('перемешивалось', 5),
  pluralPast: Word('перемешивались', 5),
  imperativeInformal: Word('перемешивайся', 5),
  imperativeFormal: Word('перемешивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемешиваться.name.text, перемешиваться);

export { перемешиваться };