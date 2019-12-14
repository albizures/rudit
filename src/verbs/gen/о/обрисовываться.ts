import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрисовываться: PerfectVerb = {
  name: Word('обрисовываться', 5),
  singular1stPerson: Word('обрисовываюсь', 5),
  singular2ndPerson: Word('обрисовываешься', 5),
  singular3rdPerson: Word('обрисовывается', 5),
  plural1stPerson: Word('обрисовываемся', 5),
  plural2ndPerson: Word('обрисовываетесь', 5),
  plural3rdPerson: Word('обрисовываются', 5),
  masculinePast: Word('обрисовывался', 5),
  femininePast: Word('обрисовывалась', 5),
  neuterPast: Word('обрисовывалось', 5),
  pluralPast: Word('обрисовывались', 5),
  imperativeInformal: Word('обрисовывайся', 5),
  imperativeFormal: Word('обрисовывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обрисовываться.name.text, обрисовываться);

export { обрисовываться };