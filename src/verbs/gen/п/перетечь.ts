import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетечь: PerfectVerb = {
  name: Word('перетечь', 5),
  singular1stPerson: Word('перетеку', 7),
  singular2ndPerson: Word('перетечёшь', 7),
  singular3rdPerson: Word('перетечёт', 7),
  plural1stPerson: Word('перетечём', 7),
  plural2ndPerson: Word('перетечёте', 7),
  plural3rdPerson: Word('перетекут', 7),
  masculinePast: Word('перетёк', 5),
  femininePast: Word('перетекла', 8),
  neuterPast: Word('перетекло', 8),
  pluralPast: Word('перетекли', 8),
  imperativeInformal: Word('перетеки', 7),
  imperativeFormal: Word('перетеките', 7),
  imperfect: [],
};

perfectVerbs.set(перетечь.name.text, перетечь);

export { перетечь };