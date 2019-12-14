import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепечь: PerfectVerb = {
  name: Word('перепечь', 5),
  singular1stPerson: Word('перепеку', 7),
  singular2ndPerson: Word('перепечёшь', 7),
  singular3rdPerson: Word('перепечёт', 7),
  plural1stPerson: Word('перепечём', 7),
  plural2ndPerson: Word('перепечёте', 7),
  plural3rdPerson: Word('перепекут', 7),
  masculinePast: Word('перепёк', 5),
  femininePast: Word('перепекла', 8),
  neuterPast: Word('перепекло', 8),
  pluralPast: Word('перепекли', 8),
  imperativeInformal: Word('перепеки', 7),
  imperativeFormal: Word('перепеките', 7),
  imperfect: [],
};

perfectVerbs.set(перепечь.name.text, перепечь);

export { перепечь };