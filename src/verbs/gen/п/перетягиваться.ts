import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетягиваться: PerfectVerb = {
  name: Word('перетягиваться', 5),
  singular1stPerson: Word('перетягиваюсь', 5),
  singular2ndPerson: Word('перетягиваешься', 5),
  singular3rdPerson: Word('перетягивается', 5),
  plural1stPerson: Word('перетягиваемся', 5),
  plural2ndPerson: Word('перетягиваетесь', 5),
  plural3rdPerson: Word('перетягиваются', 5),
  masculinePast: Word('перетягивался', 5),
  femininePast: Word('перетягивалась', 5),
  neuterPast: Word('перетягивалось', 5),
  pluralPast: Word('перетягивались', 5),
  imperativeInformal: Word('перетягивайся', 5),
  imperativeFormal: Word('перетягивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перетягиваться.name.text, перетягиваться);

export { перетягиваться };