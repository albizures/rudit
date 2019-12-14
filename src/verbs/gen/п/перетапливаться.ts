import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетапливаться: PerfectVerb = {
  name: Word('перетапливаться', 5),
  singular1stPerson: Word('перетапливаюсь', 5),
  singular2ndPerson: Word('перетапливаешься', 5),
  singular3rdPerson: Word('перетапливается', 5),
  plural1stPerson: Word('перетапливаемся', 5),
  plural2ndPerson: Word('перетапливаетесь', 5),
  plural3rdPerson: Word('перетапливаются', 5),
  masculinePast: Word('перетапливался', 5),
  femininePast: Word('перетапливалась', 5),
  neuterPast: Word('перетапливалось', 5),
  pluralPast: Word('перетапливались', 5),
  imperativeInformal: Word('перетапливайся', 5),
  imperativeFormal: Word('перетапливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перетапливаться.name.text, перетапливаться);

export { перетапливаться };