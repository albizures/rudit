import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенести: PerfectVerb = {
  name: Word('перенести', 8),
  singular1stPerson: Word('перенесу', 7),
  singular2ndPerson: Word('перенесёшь', 7),
  singular3rdPerson: Word('перенесёт', 7),
  plural1stPerson: Word('перенесём', 7),
  plural2ndPerson: Word('перенесёте', 7),
  plural3rdPerson: Word('перенесут', 7),
  masculinePast: Word('перенёс', 5),
  femininePast: Word('перенесла', 8),
  neuterPast: Word('перенесло', 8),
  pluralPast: Word('перенесли', 8),
  imperativeInformal: Word('перенеси', 7),
  imperativeFormal: Word('перенесите', 7),
  imperfect: ['переносить'],
};

perfectVerbs.set(перенести.name.text, перенести);

export { перенести };